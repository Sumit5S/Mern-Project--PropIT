import React from "react";
import {
  Typography,
  Box,
  Stack,
  FormControl,
  FormHelperText,
  TextareaAutosize,
} from "@pankod/refine-mui";
import { CustomButton } from "components";

const Review = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Reviews
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "5x",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    // onSubmit={handleSubmit(onFinishHandler)} >
                    >
        <FormControl>
          <TextareaAutosize
            minRows={5}
            required
            placeholder="Write reviews"
            color="info"
            style={{
              width: "100%",
              background: "transparent",
              fontSize: "16px",
              borderColor: "rgba(0,0,0,0.23)",
              borderRadius: 6,
              padding: 10,
              color: "#919191",
            }}
            // {...register("description", { required: true })}
          />
        </FormControl>
        <CustomButton
                        type="submit"
                        title={"Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
        </form>
      </Box>
    </Box>
  );
};

export default Review;
