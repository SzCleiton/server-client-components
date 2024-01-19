import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./contexts/DialogContext";

export default  async function Home() {

  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="SzCleiton"/>
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="xiaolai"/>
      </Suspense>
    </DialogProvider>
  )
}
