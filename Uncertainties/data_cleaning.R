library(data.table)

setwd("C:/Users/agbro/Documents/Information Aesthetics/UncertantiesViz/")
dresscode_raw = read.csv("dress_code.csv")

dresscode_body = dresscode_raw[dresscode_raw$type=="body",]

counts = data.table(dresscode_body)

dress_code = counts[, .(percent = length(unique(schoolName))), by = c("item")]
dress_code$percent = dress_code$percent/length(unique(counts$schoolName))

for (i in 1:nrow(dress_code)){
if (dress_code$item[i] %in% c("exposed skin above the knee","private parts","body","other areas","other appendages","areas typically covered by undergarments","skin above mid-thigh","bare skin","all body parts","front or back cleavage","areas expected to be covered","excessive skin","anatomical details","other body parts","the body","traditionally private parts","cracks","overexposed skin","inappropriate amounts of skin")){
  dress_code$uncertain[i] = 1
} else {
  dress_code$uncertain[i] = 0
}
if (dress_code$item[i] %in% c("shoulder blades","cracks","back","buttocks")){
  dress_code$back[i] = 1
} else if (dress_code$item[i] %in% c("armpits","hips","body","other areas","other appendages","areas typically covered by undergarments","skin above mid-thigh","bare skin","all body parts","the body","traditionally private parts","from shoulders to waist","waist","exposed skin above the knee","shoulders to mid-thigh","overexposed skin","legs","inappropriate amounts of skin","midsection midriff","shoulders","sides","torso")){
  dress_code$back[i] = 2
} else {
  dress_code$back[i] = 0
}
}

dress_code$percent = round(dress_code$percent,3)*100

write.csv(dress_code,"rounded_percents.csv",row.names = FALSE)
