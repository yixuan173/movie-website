import { DATE_DESC, DATE_ASC, RATE_ASC, RATE_DESC } from "../constants/sortOptions.constant";

export const sortOptions = [
    { value: DATE_DESC, label: '上映日期 (新到舊)' },
    { value: DATE_ASC, label: '上映日期 (舊到新)' },
    { value: RATE_DESC, label: '評分 (高到低)' },
    { value: RATE_ASC, label: '評分 (低到高)' },
];