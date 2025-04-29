"use client";
import DetailsPage from "@/components/DetailsPage/DetailsPage";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/HomePage/HomePage";
import InformationsPage from "@/components/InformationsPage/InformationsPage";
import PresentationPage from "@/components/PresentationContainer/PresentationContainer";
import ProgrammePage from "@/components/ProgrammePage/ProgammePage";
import TeamPage from "@/components/TeamPage/TeamPage";
import { DataContext } from "@/utils/dataContext";
import { useContext } from "react";
export default function Home() {
  const { title } = useContext(DataContext);
  return (
    <main>
      <HomePage />
      <PresentationPage title={title} />
      <ProgrammePage title={title} />
      <DetailsPage />
      <TeamPage title={title} />
      <InformationsPage title={title} />
      <Footer />
    </main>
  );
}
