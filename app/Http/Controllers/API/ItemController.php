<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        return response()->json([
            "status" => true,
            "code" => Response::HTTP_OK,
            'message' => 'Groups fetched successfully',
            'data' => ["groups" => Item::all()]
        ]);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $item = Item::create($request->all());
        return response()->json([
            "status" => true,
            "code" => Response::HTTP_CREATED,
            'message' => 'Group created successfully',
            'data' => $item
        ], Response::HTTP_CREATED);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $unit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($item)
    {

        Item::destroy($item);
        return response()->json([
            "status" => true,
            "code" => Response::HTTP_OK,
            'message' => 'Item deleted successfully',
            'data' => Item::all(),
        ], Response::HTTP_OK);
    }
}
