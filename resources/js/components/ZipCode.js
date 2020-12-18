import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../utils/api";

function ZipCode() {
    const initData = {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: ""
    };
    const [data, setData] = useState(initData);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        api.post("zipcode", data).then(result => setData(result.data));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-auto mt-2 align-self-end">
                    <label htmlFor="number" className="form-label">
                        CEP:
                    </label>
                </div>
                <div className="col-auto">
                    <input
                        name="number"
                        id="number"
                        defaultValue=""
                        placeholder="Digite o cep"
                        className="form-control"
                        ref={register({
                            required: true,
                            minLength: 8,
                            pattern: /^[0-9]{8}$/
                        })}
                        maxLength={8}
                    />
                </div>
                {console.log(errors)}
                <div className="col-auto">
                    <button className="btn btn-primary">Buscar</button>
                </div>
                <div className="col-12 p-2">
                    {errors?.number?.type === "required" && "Digite o CEP"}
                    {errors?.number?.type === "minLength" && "Digite 8 números"}
                    {errors?.number?.type === "pattern" && "Cep inválido"}
                </div>
            </form>
            {data && data.cep && <hr />}
            <ul class="list-group">
                <Content data={data} name="cep" />
                <Content data={data} name="localidade" />
                <Content data={data} name="uf" />
                <Content data={data} name="logradouro" />
                <Content data={data} name="bairro" />
                <Content data={data} name="complemento" />
                <Content data={data} name="gia" />
                <Content data={data} name="ddd" />
                <Content data={data} name="siafi" />
            </ul>
        </div>
    );
}

function Content({ data, name }) {
    return (
        <>
            {data[name] !== "" && (
                <li class="list-group-item">
                    <small>{name}</small>
                    <div>{data[name]}</div>
                </li>
            )}
        </>
    );
}

export default ZipCode;
