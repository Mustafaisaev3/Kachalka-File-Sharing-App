import React from 'react'

const Hero = () => {
  return (
    <section className="bg-transparent">
        <div className="h-full mx-auto max-w-screen-xl px-4 py-32 lg:flex relative">
            <div className="mx-auto max-w-xl text-center  z-10">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    <span className='text-primary'>Загружайте, сохраняйте</span> и легко <span className='text-primary'>делитесь</span> своими файлами в одном месте
                </h1>

                <p className="mt-4 sm:text-xl/relaxed text-gray-500">
                    Перетащите свой файл прямо в облако. Безопасно поделитесь им со своими друзьями с помощью пароля. Отправьте файл по электронной почте.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                        href="/files"
                    >
                        Начать
                    </a>

                    <a
                        className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                        href="/sign-in"
                    >
                        Регистрация
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero