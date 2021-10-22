# The Dinner Club

1. **What columns violate 1NF?**

Food_code and Food_description should be separated in 3 columns each.
Food_code should be `Dinner_code`, `Drink_code` and `Dessert_code`.
Food_description should be `Dinner`, `Drink`, and `Dessert` as well.

2.**What entities do you recognize that could be extracted?**

I would remove Food_description to store that date into separate tables one for the main dish `Dinners` one for `drinks` and another for `desserts` so in my **1NF** table i would only make foreign key references to each of the new tables created with the codes(`Dinner_code`, `Drink_code`,`Dessert_code`) and do the same to `venue_code` and `venue_description` as well.

3.**Name all the tables and columns that would make a 3NF compliant solution.**

In the original table the columns that compliant with 3NF are `venue_code`, `venue_description` now they belong to my **3NF** `Venues` because `venue_description` relies upon `venue_code` that is a foreign key in another table.
Also the newly created tables `Dinners`, `drinks`, `desserts` which contains the previous unatomized columns `food_code` and `food description`.
