import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <Space />
      <div className="h-96 w-full flex flex-col justify-center items-center ">
        <h1 className="text-9xl font-extrabold text-black">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="my-5 mt-14">
          <Link href="/">
            <a className="btn">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}