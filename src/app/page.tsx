import SixDigitCode from "@/components/SixDigitCode";
import AccountActivation from "@/components/AccountActivation";
import DeviceAuthorization from "@/components/DeviceAuthorization";
import GeoIpSync from "@/components/GeoIpSync";
import ResidentialIpPayment from "@/components/ResidentialIpPayment";
import VpnRequest from "@/components/VpnRequest";
import multipleStep from '@/lib/multipleStep'

export default async function Home() {

  const data = await multipleStep();


  return (
    <>
      {data?.step == 1 && <SixDigitCode />}
      {data?.step == 2 && <VpnRequest />}
      {data?.step == 3 && <ResidentialIpPayment />}
      {data?.step == 4 && <DeviceAuthorization />}
      {data?.step == 5 && <GeoIpSync />}
      {data?.step == 6 && <AccountActivation />}
    </>
  );
}
