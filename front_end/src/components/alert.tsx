import { Box, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";

type Props={
    alertStatus:"success" | "error" | null
    alertMessage:string
    setAlertStatus: React.Dispatch<React.SetStateAction<"success" | "error" | null>>
}

export function SetAlert({alertStatus, alertMessage, setAlertStatus}:Props){
    return (
      <Box>
        {alertStatus && (
          <Alert status={alertStatus} mt={4}>
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>{alertStatus === "success" ? "Success" : "Error"}</AlertTitle>
              <AlertDescription display="block">
                {alertMessage}
              </AlertDescription>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlertStatus(null)} />
          </Alert>
        )}
      </Box>
    );
}