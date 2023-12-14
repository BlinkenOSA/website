import DesktopLayout from "@/components/Layout/desktop/Layout";
import {Media} from "@/utils/media";


const IndexPage = () => {
  return (
    <>
      <Media lessThan="md">
        <h1>Mobile</h1>
      </Media>
      <Media greaterThanOrEqual="md">
        <DesktopLayout>
            <h1 style={{fontWeight: 400}}>Index Page</h1>
        </DesktopLayout>
      </Media>
    </>
  )
}

export default IndexPage;
