import Image from "next/image";
import Link from "next/link";

export default function CompleteCheckout() {
  return (
    <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/icon/checkout-complete.svg"
            width={343}
            height={300}
            alt="checkout complete"
          />
        </div>
        <div className="pt-70 pb-50">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Checkout Completed
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Kami akan periksa pembayaran Anda
            <br className="d-sm-block d-none" /> dan menghubungi via WhatsApp
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <Link href="/member">
            <a
              className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
              role="button"
            >
              My Dashboard
            </a>
          </Link>
          <a
            className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
            href="https://wa.me/6281238564696?text=Saya%20sudah%20melakukan%20pembayaran"
            role="button"
          >
            WhatsApp ke Admin
          </a>
        </div>
      </div>
    </section>
  );
}
