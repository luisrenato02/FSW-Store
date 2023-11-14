import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const Productitem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[170px]">
      <div className="bg-accent rounded-lg h-[170px] w-[170px] flex items-center place-content-center relative">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold ">
                R${product.totalPrice.toFixed(2)}
              </p>
              <p className="opacity-75 text-xs line-through">
                R${Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="opacity-75 text-xs line-through">
              R${Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productitem;
