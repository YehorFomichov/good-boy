import type { NextPage } from 'next'
import MainLayout from "../components/layout/MainLayout";
import Stepper from "../components/layout/MainForm";

const Home: NextPage = () => {
  return (
    <MainLayout><Stepper/></MainLayout>
  )
}

export default Home
