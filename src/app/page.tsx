import Card from "@/components/Card";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-center pt-32">
        <Card country="UK" headlines={"test"}/>
        <Card country="US" headlines={"test"}/>
        <Card country="France" headlines={"test"}/>
        <Card country="Australia" headlines={"test"}/>
        <Card country="India" headlines={"test"}/>
      </div>
    </>
  );
}
