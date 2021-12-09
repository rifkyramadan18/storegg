import Link from "next/link";

export default function Connect() {
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href="mailto: rifkylamongan18@gmail.com">
            <a href="" className="text-lg color-palette-1 text-decoration-none">
              rifkylamongan18@gmail.com
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="mailto: rifkyramadanazmi18@gmail.com">
            <a className="text-lg color-palette-1 text-decoration-none">
              rifkyramadanazmi18@gmail.com
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="https://goo.gl/maps/Dj1XyuG3fCVytDAfA">
            <a className="text-lg color-palette-1 text-decoration-none">
              Jl. Ikan Lele I No.14, Sukomulyo
              <br />
              Kabupaten Lamongan
              <br /> Jawa Timur <br />
              62216
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="tel: 081238564696">
            <a className="text-lg color-palette-1 text-decoration-none">
              0812 - 3856 - 4696
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
