import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const OrderSection = () => {
  return (
    <>
      <h2>Cara Pesan</h2>

      <div className="gap-6 mt-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div>
            <FontAwesomeIcon
              icon={faList}
              className="text-2xl text-green-400"
            />
          </div>
          <p>Pilih Produk yang anda inginkan</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl text-green-400"
            />
          </div>
          <p>Klik “Pesan via WhatsApp”</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <FontAwesomeIcon
              icon={faWallet}
              className="text-2xl text-green-400"
            />
          </div>
          <p>Lakukan pembayaran</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>
            <FontAwesomeIcon
              icon={faTruck}
              className="text-2xl text-green-400"
            />
          </div>
          <p>Pesanan dikirim ke alamat Anda</p>
        </div>
      </div>
    </>
  );
};

export default OrderSection;
