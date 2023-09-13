import { db } from "@/lib/drizzle";
import { countries } from "@/db/schema/countries";
import { users } from "@/db/schema/users";
import { cities } from "@/db/schema/cities";

async function insertCountry() {
  return await db.insert(countries).values({ name: "Pakistan" }).returning();
}

export default async function Cart({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  // const country = await insertCountry();
  const countryList = await db.select().from(countries);
  const userList = await db.select().from(users);
  const cityList = await db.select().from(cities);

  return (
    <div>
      <h1>Country</h1>
      {countryList.map((data) => (
        <div key={data.id}>
          {data.id} {data.name}
        </div>
      ))}
    </div>
  );
}
