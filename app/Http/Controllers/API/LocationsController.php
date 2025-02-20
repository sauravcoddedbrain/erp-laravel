<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index( Request $request )
    {
        $locations = Location::with(['store']);

        if($request->get('store_id')){
            $locations->where('store_id', "=", $request->get('store_id'));
        }
        

        return response()->json([
            "status" => true,
            "code" => Response::HTTP_OK,
            'message' => 'Locations fetched successfully',
            'data' => ["locations" => $locations->get()],
        ]);
    }

    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $request->merge(['slug' => Location::slug($request->name)]);

        if ($location = Location::create($request->all())) {

            return response()->json([
                "success" => true,
                'data' => Location::with(['store'])->where('id', '=', $location->id )->first(),
                "code" => Response::HTTP_CREATED,
                'message' => 'Store created successfully',
            ], Response::HTTP_CREATED);
        } else {
            return response()->json([
                "success" => false,
                'data' => [],
                "code" => Response::HTTP_UNAUTHORIZED,
                'message' => 'There was some error while creating store',
            ], Response::HTTP_UNAUTHORIZED);
        }
    }

    

    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $location)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $location)
    {
        //
    }
}
