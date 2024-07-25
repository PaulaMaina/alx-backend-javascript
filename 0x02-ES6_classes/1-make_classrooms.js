import ClassRoom from "./0-classroom";

/**
 * Implements the initializeRooms function.
 * @returns an array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}