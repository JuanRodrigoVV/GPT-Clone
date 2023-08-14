import { AccordionItemStylesNames } from "@mantine/core/lib/Accordion/AccordionItem/AccordionItem";

interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}