import Layout from "@/components/LayoutV1/Layout";
import {Media} from "@/utils/media";


const IndexPage = () => {
  return (
    <Layout>
      <Media lessThan="md">
        <h1>Mobile</h1>
      </Media>
      <Media greaterThanOrEqual="md">
        <h1>Desktop</h1>
      </Media>
    </Layout>
  )
}

export default IndexPage;
