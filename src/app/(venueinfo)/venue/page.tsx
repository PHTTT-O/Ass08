import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default function VenuePage() {

  const venues = getVenues();

  return (
    <main>

      <h1 className="text-xl font-bold">
        Venue Catalog
      </h1>

      <VenueCatalog venuesJson={venues} />

    </main>
  );
}