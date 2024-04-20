export default function PromoPackages() {
  return (
    <>
      <h3 className="mt-12 text-lg font-bold text-center xl:text-left">Промо пакети</h3>
      <table className="mt-6 w-full text-left border-separate border-spacing-x-2 text-black">
        <thead>
          <tr className="text-[13px] text-[#ACACAC]">
            <th className="py-2 pl-4 bg-[#F5F5F5]">Настаняване</th>
            <th className="py-2 pl-4 bg-[#F5F5F5]">Цена</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td className="py-2 pl-4">1 човек в двойна стая</td>
            <td className="py-2 pl-4 font-bold">1149 лв.</td>
          </tr>
          <tr>
            <td className="py-2 pl-4">Трети възрастен</td>
            <td className="py-2 pl-4 font-bold">1100 лв.</td>
          </tr>
          <tr>
            <td className="py-2 pl-4">Единична стая</td>
            <td className="py-2 pl-4 font-bold">1548 лв.</td>
          </tr>
          <tr>
            <td className="py-2 pl-4">Дете 2-5.99 г. в стая с 2-ма възрастни</td>
            <td className="py-2 pl-4 font-bold">560 лв.</td>
          </tr>
          <tr>
            <td className="py-2 pl-4">Дете 6-11.99 г. в стая с 2-ма възрастни</td>
            <td className="py-2 pl-4 font-bold">728 лв.</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}