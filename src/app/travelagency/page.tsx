import Agency from '@/components/Agency'
import React from 'react'
import { agencies_data } from "@/data/agencies";

const page = () => {
  return (
    <div>
       <section className="max-w-7xl mx-auto p-9">
          <h2 className="font-bold text-5xl text-black">Agences de Voyage</h2>
          <h3 className="text-black py-8 text-xl">
            Découvrez des options qui correspondent à vos centres d'intérêt et à votre façon de voyager.
          </h3>
          <div className="mx-auto max-w-7xl  mt-0 -mb-14 px-2 lg:px-4">
          
        </div>
        </section>
      <Agency/>
       <section className=" mt-10 p-6 bg-white rounded-t-lg">
          <div className="pt-5">
            <h3 className="text-xl font-bold">Trending travellers</h3>
            <p className="font-light">
              Most popular choices for drivers from around the Cameroon
            </p>
          </div>

          <div className="flex space-x-4 py-5 overflow-x-scroll">
            {agencies_data.map((item) => (
                <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
                    <img
                        key={item.id}
                        className="w-80 h-72 object-cover rounded-lg pb-2"
                        src={item.src}
                        alt=""
                    />

                    <p className="">Nom:{item.nom}</p>
                    <p className="">Localisation :{item.localisation}</p>
                    <p className="">type_service:{item.type_service}</p>
                    <p className="">type_vehicule :{item.type_vehicule}</p>
                   
                </div>
            ))}
          </div>
        </section>
    </div>

  )
}

export default page
