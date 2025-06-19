import SixDigitCode from "@/components/SixDigitCode";
import AccountActivation from "@/components/AccountActivation";
import DeviceAuthorization from "@/components/DeviceAuthorization";
import GeoIpSync from "@/components/GeoIpSync";
import ResidentialIpPayment from "@/components/ResidentialIpPayment";
import VpnRequest from "@/components/VpnRequest";

export default function Home() {
  return (
    <>
      {false && <SixDigitCode />}
      {false && <VpnRequest />}
      {false && <ResidentialIpPayment />}
      {true && <DeviceAuthorization />}
      {false && <GeoIpSync />}
      {false && <AccountActivation />}
    </>
  );
}
