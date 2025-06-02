import Link from "next/link";

export default function AdditionSection() {
  const link = (
    <Link
      href="https://skillshift.offiwebsite.com/privacy-policy"
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://skillshift.offiwebsite.com/privacy-policy
    </Link>
  );
  const terms = [
    {
      id: "9.1.",
      value: `  Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.`,
    },
    {
      id: "9.2.",
      value: ` Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте,
        если иное не предусмотрено новой редакцией Политики конфиденциальности.`,
    },
    {
      id: "9.3.",
      value: `Все предложения или вопросы по настоящей Политике конфиденциальности следует сообщать указать раздел сайта интернет-магазина`,
    },
    {
      id: "9.4.",
      value: ` Действующая Политика конфиденциальности размещена на странице по адресу https:// skillshift.offiwebsite.com/privacy-policy`,
    },
  ];
  return (
    <section className="mb-15">
      <h1 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ
      </h1>
      {terms.map((t) => (
        <p
          className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl"
          key={t.id}
        >
          {t.id + t.value}
        </p>
      ))}
    </section>
  );
}
