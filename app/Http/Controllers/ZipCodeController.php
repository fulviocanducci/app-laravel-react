<?php

namespace App\Http\Controllers;

use Canducci\ZipCode\Address;
use Canducci\ZipCode\ZipCode;
use Illuminate\Http\Request;

class ZipCodeController extends Controller
{
    private ZipCode $zipcode;
    private Address $address;

    public function __construct(ZipCode $zipcode, Address $address)
    {
        $this->zipcode = $zipcode;
        $this->address = $address;
    }

    public function getZipCode(Request $request)
    {
        $number = $request->get('number');
        if ($number) {
            $response = $this->zipcode->find($number);
            if ($response->isValid())
            {
                return response()
                    ->json($response->getArray(), 200);
            }
        }
        return null;
    }

    public function getAddress(Request $request)
    {
        $uf = $request->get('uf');
        $city = $request->get('city');
        $street = $request->get('street');
        if ($uf && $city && $street)
        {
            $response = $this->address->find($uf, $city, $street);
            return response()
                    ->json($response->all(), 200);
        }
        return null;
    }
}
