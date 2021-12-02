# The Dinner Club

1. **What columns violate 1NF?**

Food_code and Food_description have multiple values, this violate first rule, each column should have atomic values.

Dinner_date violates rule 4 of 1NF: Attribute domain should not change (all values in a column must be of the same kind or type).

2.**What entities do you recognize that could be extracted?**

I recognize 4 entities that could be extracted: members, dinners, venues and food.

3.**Name all the tables and columns that would make a 3NF compliant solution.**

Tables Columns
Members : member_id, member_name, member_address
dinners : dinner_id, dinner_date, venue_code
venues : venue_code, venue_description
food : food_code, food_description
