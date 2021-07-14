import { v4 as uuid } from 'uuid';

export const getUniqueId = (length=6) => uuid().slice(0, length);