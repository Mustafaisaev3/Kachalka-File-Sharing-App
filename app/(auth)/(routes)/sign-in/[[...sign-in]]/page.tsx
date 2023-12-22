import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                    alt="Night"
                    src="/cloud-bg.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                />

                <div className="hidden lg:relative lg:block lg:p-12 mb-[80px]">
                    <a className="block text-white" href="/">
                    <span className="sr-only">Главная</span>
                    </a>

                    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl flex gap-2 items-center">
                        <Image src='/logo2.png' alt='logo' width={50} height={80} className='object-cover' /> Добро пожаловать 
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/90">
                        Загружайте, сохраняйте и легко делитесь своими файлами в одном месте
                    </p>
                </div>
            </section>

            <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                <a
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                    href="/"
                >
                    <span className="sr-only">Главная</span>
                    <Image src='/logo2.png' alt='logo' width={50} height={80} className='object-cover' />
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Добро пожаловать 
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                    Загружайте, сохраняйте и легко делитесь своими файлами в одном месте
                </p>
                </div>

                <SignIn />
            </div>
            </main>
        </div>
    </section>
  );
}