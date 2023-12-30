import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [

  ];

  return (
    <div className=" py-4">
      {/* <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div> */}


    </div>
  );
}
