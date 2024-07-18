import ListItem from "@/components/ListItem"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className= "
    bg-neutral-900
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-hidden
    "> 
    <Header>
      <div className="
      mb-2">
        <h1 className="
        text-white
        text-3xl
        font-semibold">
          Welcome Back
        </h1>
    <div className="
    grid
    grid-cols-1
    sm:grid-col-2
    xl:grid-cols-3
    2xl:grid-col-4
    gap-3
    mt-4">

      <ListItem 
      image = "/images/logo-white.png" 
      name = "Liked Songs"
      />
      
    </div>
      </div>
    </Header>
    </div>
  );
}
