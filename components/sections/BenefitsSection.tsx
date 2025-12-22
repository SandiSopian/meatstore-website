import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHandHoldingHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const BenefitsSection = () => {
  return (
    <div>
      <h2 className="my-5">Benefit Untuk Anda</h2>

      <div className="mb-6 flex flex-col gap-6 bg-white text-black text-center max-w-xs mx-auto p-4 rounded-lg shadow-lg w-full">
        <div className="mt-4">
          <FontAwesomeIcon icon={faLeaf} className="text-2xl text-red-600" />
        </div>
        <h2 className="font-bold text-2xl">Segar & Alami</h2>
        <p className="mb-4">Daging pilihan tanpa bahan pengawet.</p>
      </div>

      <div className="mb-6 flex flex-col gap-6 bg-white text-black text-center max-w-xs mx-auto p-4 rounded-lg shadow-lg w-full">
        <div className="mt-4">
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            className="text-2xl text-red-600"
          />
        </div>
        <h2 className="font-bold text-2xl">Higienis & Halal</h2>
        <p className="mb-4">Diproses sesuai standar kebersihan & syariat.</p>
      </div>

      <div className="mb-6 flex flex-col gap-6 bg-white text-black text-center max-w-xs mx-auto p-4 rounded-lg shadow-lg w-full">
        <div className="mt-4">
          <FontAwesomeIcon icon={faTag} className="text-2xl text-red-600" />
        </div>
        <h2 className="font-bold text-2xl">Harga Terjangkau</h2>
        <p className="mb-4">Kualitas premium dengan harga bersahabat.</p>
      </div>
    </div>
  );
};

export default BenefitsSection;
