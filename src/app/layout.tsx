import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOFIC Publisher Partnership',
  description: '출판사를 위한 새로운 기회 - MOFIC과 함께라면 구작도 빛납니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
