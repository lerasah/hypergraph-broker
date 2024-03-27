import { Request, Response } from "express";
import { Route } from "tsoa";

import { CreatedResponseDto } from "../models/dto/common/created-response-dto";
import { ErrorResponseDto } from "../models/dto/common/error-response-dto";
import { GetAllForDropdownOutputDto } from "../models/dto/get-all-for-dropdown-output-dto";
import { CategoryEnum } from "../models/enum/category-enum";
import { CannedResponse } from "../models/dto/canned-response/canned-response-query-result";

@Route("cannedresponses")
class CannedResponseController {

	//@Post("/add")
	async add(req: Request, res: Response<CreatedResponseDto<CannedResponse> | ErrorResponseDto>) {
		
		try {
			// const record = await CannedResponse.create({ ...req.body });
			const record = {} as CreatedResponseDto<CannedResponse>;
			return res.json({ msg: "Record added" });
		} catch (e) {
			return res.sendStatus(500).json({ msg: "Failed to add record" });
		}
	}

	//@Get()
    async getAll(res: Response<CannedResponse[] | ErrorResponseDto>) {
		try {
			// const records = await CannedResponse.findAll({ order:[['name','ASC']]});
			return res.json([]);
		} catch (e) {
			return res.status(500).json({ msg: "Failed to fetch Canned Responses" });
		}
	}

	//@Delete("/")
	async delete(req: Request, res: Response<null | ErrorResponseDto>) {
		try {
			const { id } = req.params;
			// const record = await CannedResponse.findOne({ where: { id } });

			// if (!record) {
			// 	return res.status(404).json({ msg: "Cannot find canned-responses" });
			// }

			// await record.destroy();
			return res.status(204).end();
		} catch (e) {
			return res
                .status(500)
                .json({
                    msg: "Failed to delete"
                });
		}
	}

	//@Get()
    async getCategoriesForDropdown(res: Response<GetAllForDropdownOutputDto<CategoryEnum>[] | ErrorResponseDto>) {
		try {
			const items: GetAllForDropdownOutputDto<CategoryEnum>[] = [
				{ id: CategoryEnum.DriversLicenseRenewal, name: 'Driver License Renewal' },
				{ id: CategoryEnum.HealthCardRenewal, name: 'Health Card Renewal' },
				{ id: CategoryEnum.OutdoorCardAssistance, name: 'OSAP: Ontario Student Assistance Program' },
				{ id: CategoryEnum.OSAPAssistance, name: 'Outdoor Card Renewal' },
			];
			return res.json(items);
		} catch (e) {
			console.info(e)
			return res.status(500).json({ msg: "Failed to fetch categories" });
		}
	}
}

export default new CannedResponseController();