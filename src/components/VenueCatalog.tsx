import { VenueJson, VenueItem } from "../interface";
import Card from "./Card";
import Link from "next/link";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venueJsonReady = await venuesJson;

  return (
    <div className="flex flex-row flex-wrap justify-around">
      {venueJsonReady.data.slice(0, 3).map((venueItem) => (
        <Link href={`/venue/${venueItem._id}`} key={venueItem._id}>
          <Card
            venueName={venueItem.name}
            imgSrc={venueItem.picture}
            rating={0}
            onRatingChange={() => {}}
          />
        </Link>
      ))}
    </div>
  );
}
