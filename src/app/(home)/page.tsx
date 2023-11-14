import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";
export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />
      <div className="px-5">
        <Categories />
      </div>

      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keyboards} />

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
      />

      <SectionTitle>Mouses</SectionTitle>
      <ProductList products={mouses} />
    </div>
  );
}
