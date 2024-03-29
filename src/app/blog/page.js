import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <header className='flex items-center justify-center py-8 text-xl'>
        <Link href='/'>Main</Link>
      </header>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
          <h1>Blog Woman in Tech</h1>
          <div>
            <h3>Запущен новый курс по Next.js в рамказ нашего проекта</h3>
          </div>
          <div>
            <h3>Отзывы на Next.js курс великлепные</h3>
          </div>
        </div>
      </main>
    </>
  );
}
