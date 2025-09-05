import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/lib/api";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const shippingAddresFormSchema = z.object({
  line_1: z.string().min(1).max(50),
  line_2: z.string().max(50).optional(),
  city: z.string().min(1).max(50),
  phone: z.string().min(10).max(15),
});


function ShippingAddressForm() {

  const form = useForm({
    resolver: zodResolver(shippingAddresFormSchema),
    defaultValues: {
      line_1: "",
      line_2: "",
      city: "",
      phone: "",
    },
  });

  const cart = useSelector((state) => state.cart.cartItems);
  const [createOrder,{isLoading} ] = useCreateOrderMutation();
  console.log(cart);


  async function onSubmit(values) {
    try {
      await createOrder({
        shippingAddress: values,
        items: cart.map((item)=> ({
          productId: item.product._id,
          quantity:item.quantity,
        })),
      }).unwrap();
    } catch (error) {
      
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="line_1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="123 Main Street" {...field} />
              </FormControl>
              <FormDescription>Street address, P.O. box, company name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="line_2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 2</FormLabel>
              <FormControl>
                <Input placeholder="Apartment, suite, unit, building, floor, etc." {...field} />
              </FormControl>
              <FormDescription>Additional address information</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Colombo" {...field} />
              </FormControl>
              <FormDescription>City or town name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0777777777" {...field} />
              </FormControl>
              <FormDescription>Contact number for delivery updates</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default ShippingAddressForm