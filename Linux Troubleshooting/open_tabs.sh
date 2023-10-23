 #!/bin/bash

for i in {36..113}
do
  url="https://dev.wasteplus.gr/unit_add.php?id=$i"
  xdg-open "$url"
done

