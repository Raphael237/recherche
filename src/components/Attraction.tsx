"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import BudgetSlider from "@/components/save/BudgetSlider";
import { useState } from 'react';


export const formSchema = z.object({
  location: z.string().min(2).max(50),
destination: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: "Please select at least 1 adult",
    })
    .max(12, { message: "Max 12 adults Occupancy" }),
  children: z.string().min(0).max(12, {
    message: "Max 12 children Occupancy",
  }),
  luggages: z.string().min(0, {
    message: "Please select the number of your luggages",
  }),
  disabled: z.string().min(0, {
    message: "Please select the number of disabled people",
  }),
  animals: z.string().min(0, {
    message: "Please select the number of disabled people",
  }),
});

function Attraction() {
  const router = useRouter();
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [animals, setAnimals] = useState(0);
    const [luggages, setLuggages] = useState(0);
    const [disabled, setDisabled] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const updateValues = () => {
        // Mettez à jour les valeurs des différents attributs ici
        const label = `${adults} Adult - ${children} Children - ${disabled} Disabled - ${luggages} Luggages - ${animals} Animals`;
        setLabel(label);
        toggleDropdown();
    };

    const [label, setLabel] = useState(
        `${adults} Adult - ${children} Children - ${disabled} Disabled - ${luggages} Luggages - ${animals} Animals`
    );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    destination: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      luggages: "0",
      disabled: "0",
      animals: "0"
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
      url.searchParams.set("ss", values.destination);
    url.searchParams.set("group_adults", values.adults);
    url.searchParams.set("group_children", values.children);
    url.searchParams.set("no_luggages", values.luggages);
    url.searchParams.set("no_disabled", values.disabled);
    url.searchParams.set("no_animals", values.animals);
    url.searchParams.set("checkin", checkin);
    url.searchParams.set("checkout", checkout);

    router.push(`/search?url=${url.href}`);
  }

  return (

      <div className="border-[2px] border-solid border-slate-500 rounded-xl p-3 md:p-5 flex-col sm:flex-row gap-3 sm:gap-5 text-lg bg-gray-200 ">
       

          <Form {...form} >
              <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=""
              >
                <div className="flex flex-wrap gap-2 mt-6 lg:{flex flex-wrap gap-1 mt-6}">
                  <div className="relative flex-auto w-full md:w-[30%] xl:w-[20%]"><FormField
                      control={form.control} name="location" render={({field}) => (<FormItem>

                          <FormMessage/>

                          <FormControl>
                              <Input placeholder="From" {...field} />
                          </FormControl>
                      </FormItem>
                  )}
                  />
                      <button className="absolute inset-y-0 right-0 flex items-center pr-4 mt-1"
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
                  
                  <div className="relative flex-auto w-full md:w-[30%] xl:w-[20%] h-max">
                      <FormField
                          control={form.control}
                          name="destination"
                          render={({field}) => (
                              <FormItem>

                                  <FormMessage/>

                                  <FormControl>
                                      <Input placeholder="To" {...field} />
                                  </FormControl>
                              </FormItem>
                          )}
                      />
                      <button className="absolute inset-y-0 right-0 flex items-center pr-4"
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
                  <div
                        className="w-full md:w-[30%] xl:w-[20%] flex-auto pl-2 pr-3 justify-between rounded-lg sm:text-sm bg-[var(--bg-1)] border bg-white text-gray-500  h-min">
                      <FormField
                          control={form.control}
                          name="dates"
                          render={({field}) => (
                              <FormItem className="flex flex-col">
                                  <FormMessage/>

                                  <Popover>
                                      <PopoverTrigger asChild>
                                          <FormControl>
                                          <Button
                                                  id="date"
                                                  name="dates"
                                                  variant={"outline"}
                                                  className={cn(
                                                      "w-full lg:w-[300px] justify-start text-left font-normal",
                                                      !field.value.from && "text-muted-foreground"
                                                  )}
                                              >
                                                  <CalendarIcon className="mr-3 h-4 w-4 opacity-50"/>
                                                  {field.value?.from ? (
                                                      field.value?.to ? (
                                                          <>
                                                              {format(field.value?.from, "LLL dd, y")} -{" "}
                                                              {format(field.value?.to, "LLL dd, y")}
                                                          </>
                                                      ) : (
                                                          format(field.value?.from, "LLL dd, y")
                                                      )
                                                  ) : (
                                                      <span>Select your dates</span>
                                                  )}

                                              </Button>
                                          </FormControl>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0" align="start">
                                          <Calendar
                                              className={"bg-white"}
                                              initialFocus
                                              mode="range"
                                              selected={field.value}
                                              defaultMonth={field.value.from}
                                              onSelect={field.onChange}
                                              numberOfMonths={2}
                                              disabled={(date) =>
                                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                              }
                                          />
                                      </PopoverContent>
                                  </Popover>
                              </FormItem>
                          )}
                      />
                  </div>

                  <div className="relative flex-auto w-full md:w-[30%] xl:w-[20%] justify-end">
                      <Button type="submit" className="bg-blue-500 mt-auto text-base text-white ">
                          <span color={"white"} className="mr-1">Search </span>
                          <img src="/search.svg" alt="SearchIcon"
                                                                   width="20em"
                                                                   height="20em" className="invert"/>
                      </Button>
                  </div>
                  </div>

              </form>
          </Form>

      </div>

)
    ;
}

export default Attraction;