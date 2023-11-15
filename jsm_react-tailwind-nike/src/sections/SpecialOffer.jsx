
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          <span 
            className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sint
          adipisci magni vel omnis quaerat ipsum, voluptatum autem amet numquam
          voluptas quasi fugit aperiam exercitationem.
        </p>
        <p className="mt-6 info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim soluta
          officia, architecto accusamus dolorum similique repudiandae
          distinctio? Totam tempora quidem reiciendis quaerat fugiat in ab.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
