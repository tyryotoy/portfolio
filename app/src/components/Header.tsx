import Link from "next/link";

export const Header: React.FC = () => (
  <header className='flex justify-between items-center h-24 mx-36'>
        <h1 className='text-3xl'>Socrates</h1>
        <nav>
            <Link href='/Login'>
                <button className='w-32 h-10 rounded-md mr-10 hover:opacity-60'>ログイン</button>
            </Link>
            <Link href='/Signup'>
                <button className='w-32 h-10 bg-main-color text-white rounded-md hover:opacity-60'>
                    新規会員登録
                </button>
            </Link>
        </nav>
    </header>
);