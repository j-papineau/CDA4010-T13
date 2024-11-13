import { Toaster } from 'react-hot-toast';
import NavBar from '../components/NavBar/NavBar';

type Props = {
    children: React.ReactNode
}


export default function RootLayout({ children }: Props) {
  return (
    <div className='flex flex-col'>
        <NavBar/>
        <Toaster/>
        {children}
    </div>
  );
}