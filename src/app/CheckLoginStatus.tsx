'use client';

import { useCheckLoginStatus } from '@/utils/auth';
import { useEffect } from 'react';
import Toast, { toast } from '@/components/common/toast/Toast';
import { parseCookies } from 'nookies';

export const CheckLoginStatus = () => {
  const { isLoggedIn, refreshAccessToken, handleLogout } = useCheckLoginStatus();

  const autoSignin = localStorage.getItem('auto_signin');
  const cookies = parseCookies();
  const refreshToken = cookies['refresh_token'];

  const accessTokenExpireTime = localStorage.getItem('access_token_expiry');
  const refreshTokenExpireTime = localStorage.getItem('refresh_token_expiry');

  const now = new Date().getTime();
  const accessTokenExpireDate = new Date(accessTokenExpireTime as string).getTime();
  const refreshTokenExpireDate = new Date(refreshTokenExpireTime as string).getTime();

  useEffect(() => {
    if (!accessTokenExpireDate || !refreshTokenExpireDate) {
      console.log('이미 로그아웃 됨');
      handleLogout('로그인이 만료되었습니다.');
      return;
    }

    let accessTimeout: NodeJS.Timeout | undefined;
    let refreshTimeout: NodeJS.Timeout | undefined;

    // 액세스 토큰 만료 타이머
    if (accessTokenExpireDate > now) {
      accessTimeout = setTimeout(() => {
        console.log('액세스 토큰 만료');
        if (autoSignin === 'true') {
          console.log('액세스 토큰 재발급');
          refreshAccessToken(refreshToken as string);
        } else {
          handleLogout('액세스 토큰 만료로 인한 로그아웃');
        }
      }, accessTokenExpireDate - now);
    }

    // 리프레시 토큰 만료 타이머
    if (refreshTokenExpireDate > now) {
      refreshTimeout = setTimeout(() => {
        console.log('리프레시 토큰 만료');
        handleLogout('리프레시 토큰 만료로 인한 로그아웃');
      }, refreshTokenExpireDate - now);
    }

    return () => {
      if (accessTimeout) clearTimeout(accessTimeout);
      if (refreshTimeout) clearTimeout(refreshTimeout);
    };
  }, [
    accessTokenExpireDate,
    refreshTokenExpireDate,
    autoSignin,
    handleLogout,
    now,
    refreshAccessToken,
    refreshToken,
  ]);

  const toastShown = localStorage.getItem('toast_shown');

  useEffect(() => {
    if (isLoggedIn == false && toastShown == 'false') {
      // 로그인 만료 시 Toast 출력
      toast({
        message: ['로그인이 만료되었습니다.', '다시 로그인을 해주세요!'],
        type: 'error',
      });

      localStorage.setItem('toast_shown', 'true');
    }
  }, [isLoggedIn, toastShown]);

  return <>{isLoggedIn === false && <Toast />}</>;
};
