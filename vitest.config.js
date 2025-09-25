import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true, // 테스트 함수 전역 사용 설정 (예: describe, it, expect 등)
    environment: 'jsdom', // 브라우저 환경 시뮬레이션 (테스트 환경을 브라우저의 DOM처럼 시뮬레이션해주는 jsdom으로 설정)
    setupFiles: './src/vitest/setupTests.js', // 설정 파일 경로
    // css: true, // CSS 파일 지원 활성화
    // mockReset: true, // 테스트마다 모킹 초기화
    // coverage: {
    //   enabled: true, // 코드 커버리지 활성화
    //   provider: 'istanbul', // 코드 커버리지 도구 설정 (istanbul 사용)
    //   reporter: ['text', 'json', 'html'], // 보고서 형식 설정
    //   exclude: [  // 커버리지에서 제외할 파일 패턴
    //     // 'src/vitest/**'
    //   ],
    // },
    exclude:[
        '**/node_modules/**', 
        '**/dist/**', 
        // '**/src/test/e2e/**', 
        '**/src/App.test.js' ], // 제외할 파일 패턴
  },
});