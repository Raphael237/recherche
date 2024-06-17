"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BudgetSlider from "@/components/save/BudgetSlider";
import { useState } from 'react';


export const formSchema = z.object({
  location: z.string().min(2).max(50),
destination: z.string().min(2).max(50),
  
  });
 
 

function Agency() {
  const router = useRouter();
  
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

   

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    destination: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);


    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
    url.searchParams.set("ss", values.destination);
    

    router.push(`/search?url=${url.href}`);
  }

  return (

   

 <div className=" ">
    
          <Form {...form} >
              <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-wrap gap-4 mt-6 border-[3px] border-solid border-slate-800  rounded-xl p-5 md:p-5 flex-col sm:flex-row gap-12 sm:gap-4 text-lg bg-gray-200 "
              >
                  <div className="relative w-full md:w-[20%] xxl:w-[17%] shrink-0"><FormField
                      control={form.control} name="location" render={({field}) => (
                      <FormItem>

                          <FormMessage/>

                          <FormControl>
                              <Input placeholder="Localisation" {...field} />
                          </FormControl>
                      </FormItem>
                  )}
                  />
                      <button className="absolute inset-y-1 right-0 flex items-center pr-4"
                              id="headlessui-combobox-button-:r5:" type="button" tabIndex={0} aria-haspopup="listbox"
                              aria-expanded="true" data-headlessui-state="open"
                              aria-controls="headlessui-combobox-options-:rn:">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                          </svg>
                      </button>
                  </div>

                    <div className="relative w-full md:w-[20%] xxl:w-[17%] shrink-0">
                        <FormField
                      control={form.control} name="location" render={({field}) => (
                      <FormItem>

                          <FormMessage/>

                          <FormControl>
                              <Input placeholder="Type de service" {...field} />
                          </FormControl>
                      </FormItem>
                  )}
                  />
                      <button className="absolute inset-y-1 right-0 flex items-center pr-4"
                              id="headlessui-combobox-button-:r5:" type="button" tabIndex={0} aria-haspopup="listbox"
                              aria-expanded="true" data-headlessui-state="open"
                              aria-controls="headlessui-combobox-options-:rn:">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                          </svg>
                      </button>
                  </div>
                   <div className="relative w-full md:w-[20%] xxl:w-[17%] shrink-0">
                        <FormField
                      control={form.control} name="location" render={({field}) => (
                      <FormItem>

                          <FormMessage/>

                          <FormControl>
                              <Input placeholder="Type de service" {...field} />
                          </FormControl>
                      </FormItem>
                  )}
                  />
                      <button className="absolute inset-y-1 right-0 flex items-center pr-4"
                              id="headlessui-combobox-button-:r5:" type="button" tabIndex={0} aria-haspopup="listbox"
                              aria-expanded="true" data-headlessui-state="open"
                              aria-controls="headlessui-combobox-options-:rn:">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                          </svg>
                      </button>
                  </div>
                   
                  
                    



                     <div className="relative w-full md:w-[20%] xxl:w-[17%] shrink-0 justify-end align-items: center">
                      <Button type="submit" className="bg-blue-500 mt-auto text-base text-white ">
                          <span color={"white"} className="mr-1">Search</span>
                          <img src="/search.svg" alt="SearchIcon"
                                                                   width="20em"
                                                                   height="20em" className="invert"/>
                      </Button>
                  </div>

              </form>
          </Form>

    </div>

);
}

export default Agency;