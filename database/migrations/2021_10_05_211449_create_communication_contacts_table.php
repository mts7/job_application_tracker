<?php

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateCommunicationContactsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('communication_contacts', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->foreignCascade('contact_id');
			$table->foreignCascade('communication_id');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('communication_contacts');
	}
}
