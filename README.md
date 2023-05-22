# Hotel-reserveAPI

## Endpoints


GET /hotels

Description: Returns a list of all hotels.
GET /hotels/{hotel_id}

Description: Returns details for a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
POST /hotels

Description: Creates a new hotel with the provided details.
Request Body: Hotel details.
PUT /hotels/{hotel_id}

Description: Updates the details for a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
Request Body: Updated hotel details.
DELETE /hotels/{hotel_id}

Description: Deletes a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
GET /hotels/{hotel_id}/rooms

Description: Returns a list of all rooms for a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
GET /hotels/{hotel_id}/rooms/{room_id}

Description: Returns details for a specific room in a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
room_id: The ID of the room.
POST /hotels/{hotel_id}/rooms

Description: Creates a new room for a specific hotel with the provided details.
Parameters:
hotel_id: The ID of the hotel.
Request Body: Room details.
PUT /hotels/{hotel_id}/rooms/{room_id}

Description: Updates the details for a specific room in a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
room_id: The ID of the room.
Request Body: Updated room details.
DELETE /hotels/{hotel_id}/rooms/{room_id}

Description: Deletes a specific room in a specific hotel.
Parameters:
hotel_id: The ID of the hotel.
room_id: The ID of the room.
GET /hotels/search?query={search_query}

Description: Returns a list of hotels that match the search query.
Query Parameters:
query: The search query string.


POST /apikeys

Description: Generates a new API key.
Request Body:
password: The password for authentication.
DELETE /apikeys/{api_key}

Description: Revokes a specific API key.
Parameters:
api_key: The API key to be revoked.
Request Body:
password: The password for authentication.