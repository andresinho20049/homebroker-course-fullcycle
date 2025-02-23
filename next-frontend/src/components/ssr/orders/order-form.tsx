import { Asset } from "@/my-app/models/asset";
import { OrderType } from "@/my-app/models/order";
import { Button, Label, TextInput, TextInputProps } from "flowbite-react";
import { HTMLInputTypeAttribute } from "react";

type OrderFormType = {
    asset: Asset;
    walletId: string;
    type: OrderType
}

export const OrderForm = ({
    asset,
    type,
    walletId
}:OrderFormType) => {
    const color = type == OrderType.BUY ? "text-buy" : "text-sell";
    const translatedType = type == OrderType.BUY ? "Comprar": "Vender";

    return (
        <form action="">
            <input type="hidden" name="assetId" defaultValue={asset._id} />
            <input type="hidden" name="walletId" defaultValue={walletId} />
            <input type="hidden" name="type" defaultValue={type} />
            <TextInputOrderForm 
                required
                type={type}
                name="shares"
                labelColor={color}
                labelText="Quantidade"
                min={1}
                step={1}
                defaultValue={1}
                inputType="number"
            />
            <TextInputOrderForm 
                required
                type={type}
                name="price"
                labelColor={color}
                labelText="Preço R$"
                min={1}
                step={1}
                defaultValue={1}
                inputType="number"
            />
            <Button type="submit" color={type == OrderType.BUY ? "blue": "failure"}>{translatedType}</Button>
        </form>
    )
}

type TextInputOrderFormType = TextInputProps & {
    type: OrderType;
    labelText: string;
    labelColor: string;
    inputType: HTMLInputTypeAttribute
}

const TextInputOrderForm = ({
    type,
    labelText,
    labelColor,
    name,
    inputType,
    ...props
}:TextInputOrderFormType) => (
    <div className="my-2">
        <div>
            <Label htmlFor={name} value={labelText} className={labelColor} />
        </div>
        <TextInput 
            id={name}
            name={name}
            type={inputType}
            color={type === OrderType.BUY ? "info" : "failure"}
            {...props}
        />
    </div>
)